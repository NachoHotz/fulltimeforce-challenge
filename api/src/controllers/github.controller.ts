import { Request, Response, NextFunction } from 'express';
import getCommits from '../services/github.service';

const getCommitsController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const commits = await getCommits();
    res.status(200).send(commits);
  } catch (e) {
    next(e);
  }
};

export default getCommitsController;
