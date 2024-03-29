import request from 'supertest';
import app from '../server/app';
import { sequelize } from '../server/database';
import build from '../server/database/config/build';

let token = '';

beforeAll(async () => {
  await build();
});
describe('test GitHub Actions CICD Piplines', () => {
  test('test for husky', done => {
    expect(3).toBe(3);
    done();
  });
});

describe('Post /api/v1/user/signup', () => {
  test('responds from /api/v1/user/signup with JSON and 200 status code', done => {
    request(app)
      .post('/api/v1/user/signup')
      .set('Accept', 'application/json')
      .send({
        username: 'Eman',
        role: 'stadium',
        email: 'emanr@admin.com',
        password: '123456789',
        phone: '123856799',
        confirmPassword: '123456789',
      })
      .end((err, res) => {
        expect(res.type).toBe('application/json');
        const response = JSON.parse(res.text);
        expect(response.status).toBe(200);
        token = response.token;

        done();

        if (err) {
          done(err);
        }
      });
  });
});

describe('GET /api/v1/stadiums', () => {
  test('responds from /api/v1/stadiums with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/stadiums')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(data[0].username).toBe('ملعب الساحة');
        expect(data[0].id).toBe(5);
        done();

        if (err) {
          done(err);
        }
      });
  });
  test('responds from /api/v1/stadiums/details/5 with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/stadiums/details/5')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(data[0].Stadium.address).toBe('الزيتون');
        expect(data[0].Stadium.UserId).toBe(5);
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('responds from /api/v1/stadiums/details/2 with JSON and 401 status code', done => {
    request(app)
      .get('/api/v1/stadiums/details/2')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        expect(res.status).toBe(401);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(401);
        expect(data).toBe('هذا الملعب غير متاح');
        done();

        if (err) {
          done(err);
        }
      });
  });
});
describe('GET /api/v1/matches/stadium/5', () => {
  test('responds with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/matches/stadium/5')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('test for not exist Stadium should return 404 with "هذا الملعب غير متاح"', done => {
    request(app)
      .get('/api/v1/stadiums/profile/500')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.status).toBe(401);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(401);
        expect(data).toBe('هذا الملعب غير متاح');
        done();
      });
  });
});

describe('GET /api/v1/stadiums/profiles', () => {
  test('responds from /api/v1/stadiums/profile/id with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/stadiums/profile/5')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(data.username).toBe('ملعب الساحة');
        expect(typeof data.Stadium).toBe('object');
        expect(data.Stadium.id).toBe(1);
        expect(Array.isArray(data.Stadium.stadiumGallery)).toBe(true);
        expect(typeof data.Stadium.stadiumGallery[0]).toBe('object');
        done();
        if (err) {
          done(err);
        }
      });
  });
});

describe('GET /api/v1/matches', () => {
  test('responds from /api/v1/matches with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/matches')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        expect(data[0].ownerId).toBe(1);
        done();

        if (err) {
          done(err);
        }
      });
  });
});

describe('patch /api/v1/stadiums/edit', () => {
  test('responds from /api/v1/stadiums/edit with validation Error and 403 status code', done => {
    request(app)
      .patch('/api/v1/stadiums/edit')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({
        description:
          'يحتوي الملعب المصغر على عشب صناعي غير حشو ومنصات صدمات. يعتمد حجم ملعب كرة القدم المصغر على حجم القاعدة. اتصل بنا للحصول على التفاصيلh',
        phone: 'h0591234563',
        price: '750',
        ground: 'انجيل',
        address: 'الزيتون',
      })
      .end((err, res) => {
        expect(res.status).toBe(403);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(data.status).toBe(403);
        expect(data.message).toBe(
          'يجب أن يحتوي رقم الهاتف على الأكثر 10 أرقام',
        );
        done();

        if (err) {
          done(err);
        }
      });
  });
});
describe('patch /api/v1/stadiums/edit', () => {
  test('responds from /api/v1/stadiums/edit with validation Error and 403 status code', done => {
    request(app)
      .patch('/api/v1/stadiums/edit')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({
        description:
          'يحتوي الملعب المصغر على عشب صناعي غير حشو ومنصات صدمات. يعتمد حجم ملعب كرة القدم المصغر على حجم القاعدة. اتصل بنا للحصول على التفاصيلh',
        phone: 'h0591234563',
        price: '750',
        ground: 'hانجيل',
        address: 'hالزيتون',
      })
      .end((err, res) => {
        expect(res.status).toBe(403);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(data.status).toBe(403);
        expect(data.message).toBe(
          'يجب أن يحتوي رقم الهاتف على الأكثر 10 أرقام',
        );
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('responds from /api/v1/stadiums/edit with JSON and 200 status code', done => {
    request(app)
      .patch('/api/v1/stadiums/edit')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({
        description:
          'يحتوي الملعب المصغر على عشب صناعي غير حشو ومنصات صدمات. يعتمد حجم ملعب كرة القدم المصغر على حجم القاعدة. اتصل بنا للحصول على التفاصيلh',
        phone: '0591234',
        price: '750',
        ground: 'hانجيل',
        address: 'hالزيتون',
      })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(false);
        expect(data.UserResult).toBe(1);
        expect(data.stadiumResult).toBe(1);
        expect(data.message).toBe('تم الحفظ بنجاح');
        done();

        if (err) {
          done(err);
        }
      });
  });
});
describe('Post /api/v1/stadiums/gallery', () => {
  test('responds from /api/v1/stadiums/gallery get 200 status code', done => {
    request(app)
      .post('/api/v1/stadiums/gallery')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({
        image:
          'https://i2-prod.mirror.co.uk/incoming/article23119598.ece/ALTERNATES/s1227b/0_Stadiums-of-the-future.jpg',
        StadiumId: 7,
        userId: 17,
      })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(typeof data.image).toBe('string');
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('responds from /api/v1/stadiums/gallery get 200 status code', done => {
    request(app)
      .post('/api/v1/stadiums/gallery')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({
        image:
          'https://i2-prod.mirror.co.uk/incoming/article23119598.ece/ALTERNATES/s1227b/0_Stadiums-of-the-future.jpg',
        StadiumId: 7,
        userId: 17,
      })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(typeof data.image).toBe('string');
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('responds from /api/v1/stadiums/gallery get 200 status code', done => {
    request(app)
      .post('/api/v1/stadiums/gallery')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({
        image:
          'https://i2-prod.mirror.co.uk/incoming/article23119598.ece/ALTERNATES/s1227b/0_Stadiums-of-the-future.jpg',
        StadiumId: 7,
        userId: 17,
      })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(typeof data.image).toBe('string');
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('responds from /api/v1/stadiums/gallery get 401 status code', done => {
    request(app)
      .post('/api/v1/stadiums/gallery')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({
        image:
          'https://i2-prod.mirror.co.uk/incoming/article23119598.ece/ALTERNATES/s1227b/0_Stadiums-of-the-future.jpg',
        userId: 17,
        StadiumId: 7,
      })
      .end((err, res) => {
        expect(res.status).toBe(401);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(401);
        expect(data).toBe('لا يمكن اضافة اكثر من اربعة صور');
        done();

        if (err) {
          done(err);
        }
      });
  });
});

describe('Patch /api/v1/stadiums/gallery', () => {
  test('responds from /api/v1/stadiums/gallery get 200 status code', done => {
    request(app)
      .patch('/api/v1/stadiums/gallery')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({
        id: 26,
        image:
          'https://i2-prod.mirror.co.uk/incoming/article23119598.ece/ALTERNATES/s1227b/0_Stadiums-of-the-future.jpg',
        StadiumId: 13,
        userId: 17,
      })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(typeof data.image).toBe('string');
        done();

        if (err) {
          done(err);
        }
      });
  });
});

describe('delete /api/v1/stadiums/gallery/:ImageId/:StadiumId/userId', () => {
  test('responds from /api/v1/stadiums/gallery/18/5/17 get 204 status code', done => {
    request(app)
      .delete('/api/v1/stadiums/gallery/18/5/17')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        expect(res.status).toBe(204);
        expect(typeof res).toBe('object');
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('responds from /api/v1/stadiums/gallery/19/13/17 get 401 status code', done => {
    request(app)
      .delete('/api/v1/stadiums/gallery/19/5/17')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(typeof res).toBe('object');
        done();

        if (err) {
          done(err);
        }
      });
  });
});

describe('post /api/v1/review/5', () => {
  test('responds from /api/v1/review/5 with JSON and 200 status code', done => {
    request(app)
      .post('/api/v1/review/5')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send({ value: '4' })
      .end((error, res) => {
        expect(res.status).toBe(200);
        const { data } = JSON.parse(res.text);
        expect(data.value).toBe('4');
        done();
        if (error) {
          done(error);
        }
      });
  });
});

describe('GET /api/v1/review/5', () => {
  test('responds from /api/v1/review/5 with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/review/5')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((error, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        const { data } = JSON.parse(res.text);
        expect(Array.isArray(data)).toBe(true);
        expect(data[0].value).toBe('4');
        expect(data[0].playerId).toBe(17);
        expect(data[0].stadiumId).toBe(5);
        done();
        if (error) {
          done(error);
        }
      });
  });

  test('responds from /api/v1/review/5 with JSON and 404 status code', done => {
    request(app)
      .get('/api/v1/review/90')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((error, res) => {
        expect(res.status).toBe(404);
        expect(res.type).toBe('application/json');

        done();
        if (error) {
          done(error);
        }
      });
  });
});

describe('GET /api/v1/players/avatar/1', () => {
  test('responds from /api/v1/players/avatar/1 with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/players/avatar/1')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((error, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        const { data } = JSON.parse(res.text);
        expect(Array.isArray(data)).toBe(false);
        expect(typeof data).toBe('string');
        expect(data).toBe(
          'https://www.yourstru.ly/wp-content/uploads/2022/12/2022-12-22_12_lionel-messi-biograph.webp',
        );
        done();
        if (error) {
          done(error);
        }
      });
  });
});

describe('GET /api/v1/review/player/5', () => {
  test('responds from /api/v1/review/player/5 with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/review/player/5')
      .set('Cookie', `token=${token}`)
      .end((error, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        const { data } = JSON.parse(res.text);
        expect(data.value).toBe('4');
        expect(data.playerId).toBe(17);
        expect(data.stadiumId).toBe(5);
        done();
        if (error) {
          done(error);
        }
      });
  });
});

describe('GET /api/v1/stadiums/all/1', () => {
  test('responds from /api/v1/stadiums/all/1 with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/stadiums/all/1')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .end((error, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        const { data } = JSON.parse(res.text);
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBe(8);
        done();
        if (error) {
          done(error);
        }
      });
  });
});

afterAll(() => {
  sequelize.close();
});
