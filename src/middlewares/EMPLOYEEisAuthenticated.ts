import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import prismaClient from '../prisma';

interface Payload {
  sub: string;
}

export async function EMPLOYEEisAuthenticated (
  req: Request,
  res: Response,
  next: NextFunction
) {

  // Receber o token
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    //Validar esse token.
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    //Recuperar o id do token e colocar dentro de uma variavel admin_id dentro do req.
    req.admin_id = sub;

    const userRole = await prismaClient.admin.findUnique({
      where: {
        id: sub
      }
    });

    const roleUserLog = String(userRole.role);
    const roleUser = String("EMPLOYEE");

    if(roleUserLog === roleUser){
      return next();
    } else {
      console.log("Usuario sem permisão de empregado!!!");
      return res.status(401).end();
    }

  } catch (err) {
    return res.status(401).end();
  }

}