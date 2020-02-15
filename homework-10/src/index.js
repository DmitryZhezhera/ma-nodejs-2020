const Knex = require('knex');
const dbOptions = require('./config/config').DB;

class Users {
  constructor() {
    this.knex = new Knex(dbOptions);
  }

  async createUsers() {
    this.knex.schema
      .createTable('users', function(table) {
        table.increments('id');
        table.string('login');
        table.string('password');
        table.string('token');
      })
      .then(() => console.log('table users created'))
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        this.knex.destroy();
      });
  }

  async create(user) {
    this.knex('users')
      .insert(user)
      .then(() => console.log('data inserted'))
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        this.knex.destroy();
      });
  }

  async read(id) {
    if (!id) {
      this.knex
        .from('users')
        .select('*')
        .then((rows) => {
          console.log(rows);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        })
        .finally(() => {
          this.knex.destroy();
        });
    } else {
      this.knex
        .from('users')
        .select('*')
        .where('id', '=', id)
        .then((rows) => {
          console.log(rows);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        })
        .finally(() => {
          this.knex.destroy();
        });
    }
  }

  async update(user) {
    this.knex('users')
      .update({ login: user.login, password: user.password, token: user.token })
      .where('id', user.id)
      .catch((err) => {
        console.log('UPDATE ERROR');
        console.log(err);
        throw err;
      })
      .finally(() => {
        this.knex.destroy();
      });
  }

  async delete(ID) {
    this.knex('users')
      .where({ id: ID })
      .del()
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        this.knex.destroy();
      });
  }
}

const userUpdate = {
  id: 46,
  login: 'Abdula_UPDATED21',
  password: 'Suliman_UPDATED',
  token: 'aslfkmqer1_UPDATED',
};

const users = new Users();
// users.create({
//   login: 'Abdula',
//   password: 'Suliman',
//   token: 'aslfkmqer1',
// });
// users.delete(38);
// users.read(38);
users.update(userUpdate);
users.read();
