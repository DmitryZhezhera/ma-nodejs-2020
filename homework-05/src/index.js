const path = require('path');
const fsp = require('fs').promises;

const zlib = require('zlib');
const { promisify } = require('util');

const gunzip = promisify(zlib.gunzip);
const gzip = promisify(zlib.gzip);

const inputDirName = 'input';
const outputDirName = 'output';
const outputFileName = 'result.json.gz';

const inputDir = path.join(process.cwd(), inputDirName); // absolute path to input dir
const outputFile = path.join(process.cwd(), outputDirName, outputFileName); // absolute path to output file

async function getInputFileList() {
  try {
    const files = await fsp.readdir(inputDir);
    return files.map((file) => path.join(inputDir, file));
  } catch (e) {
    console.log('ERROR in getInputFileList');
    throw e;
  }
}

async function getObjectFromFile(filePath) {
  try {
    const compressedBuffer = await fsp.readFile(filePath); // read file to buffer
    const jsonBuffer = await gunzip(compressedBuffer); // decompress buffer with gunzip
    const json = jsonBuffer.toString(); // convert buffer to JSON string
    const object = JSON.parse(json); // parse JSON string to object
    if (!object.file || !object.url) throw new Error('ERROR wrong object income');
    return object;
  } catch (e) {
    console.log('ERROR in getInputFileList');
    throw e;
  }
}

function rebuildUrl(originalUrl) {
  const url = new URL(originalUrl);
  url.protocol = 'https:'; // Change protocol, path, search string of URL
  const pathnameParsed = path.parse(url.pathname);
  const query = `?file=${pathnameParsed.name}&type=${pathnameParsed.ext}`;
  url.pathname = '/devices';
  url.search = query;
  return url;
}

async function buildOutputObject(files) {
  const result = {};
  /*eslint-disable */
  for (const file of files) {
    const object = await getObjectFromFile(file);
    /* eslint-enable */
    object.url = rebuildUrl(object.url);
    const name = path.basename(file.toLowerCase(), '.json.gz');
    result[name] = object;
  }
  return result;
}

async function saveOutput(object) {
  try {
    const jsonString = JSON.stringify(object); // stringify object to JSON string
    const gzipBuffer = await gzip(jsonString); // compress buffer with gzip
    // write compressed buffer to file 'output/result.json.gz' (use constants)
    await fsp.writeFile(outputFile, gzipBuffer);
  } catch (e) {
    console.log('ERROR in saveOutput');
    throw e;
  }
}

async function start() {
  const inputFiles = await getInputFileList();
  const outputObject = await buildOutputObject(inputFiles);
  await saveOutput(outputObject);
}

start().catch((err) => console.error('🐞  🤪  🐛\n', err));
