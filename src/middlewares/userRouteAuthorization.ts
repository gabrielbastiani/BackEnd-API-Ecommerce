import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import prismaClient from '../prisma';

interface Payload {
  sub: string;
}

module.exports = (rulesAuthorization: any) => async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  const { sub } = verify(
    token,
    process.env.JWT_SECRET
  ) as Payload;

  req.admin_id = sub;

  const userRole = await prismaClient.admin.findUnique({
    where: {
      id: sub
    }
  });

  console.log(rulesAuthorization.indexOf(userRole.role))

  if (rulesAuthorization.indexOf(userRole.role) === -1) {
    console.log("Esta rota está bloqueada");
    res.status(403);
    res.end();
    return;
  }

  next();

}