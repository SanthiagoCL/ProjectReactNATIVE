import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "minha_chave_secreta"; // Em produção, use uma variável de 
const mockUser = [
    {
        id: 1,
        username: "admin",
        login: "admin",
        password: "admin123" // Em produção, nunca armazene senhas em texto puro
    },
    {
        id: 2,
        username: "user",
        login: "user",
        password: "user123" // Em produção, nunca armazene senhas em texto puro
    }
];

export async function POST(request) {
    try {
        const body = await request.json();
        const { loginuser, password } = body;
    }
    catch (error) {
        return NextResponse.json({error: 'Erro ao processar a requisição'},
             {status: 500});
    }      
}

export function GET(request){
    try {
        return NextResponse.json({mockUser});
    } catch (error) {
        return NextResponse.json({error: 'Erro ao processar a requisição'},
             {status: 500});
        
    }
} 