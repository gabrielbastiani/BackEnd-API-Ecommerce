import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import prismaClient from '../prisma';


interface Payload {
  sub: string;
}

export async function ADMINisAuthenticated (
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

    //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
    req.user_id = sub;

    const userRole = await prismaClient.user.findUnique({
      where: {
        id: sub
      }
    })

    const roleUserLog = String(userRole.role);

    const roleUser = String("ADMIN");

    if(roleUserLog === roleUser){
      return next();
    } else {
      console.log("Usuario sem permisão de Administrador!!!");
      return res.status(401).end();
    }

  } catch (err) {
    return res.status(401).end();
  }

}