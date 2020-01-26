import { loginWorker } from '../../../src/modules/auth/authWorkers';

export default async (req, res) => {
  res.store
    .runSaga(loginWorker)
    .toPromise()
    .then(() => {
      res.render();
    })
    .catch(err => {
      res.status(500).end(err);
    })
}
