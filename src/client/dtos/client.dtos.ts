import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

/* It's a class that contains the data that we want to send to the server when we create a new client */
class CreateClientDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    surname: string;

    @IsNotEmpty()
    @IsInt()
    age: number;

    @IsNotEmpty()
    birthdate: string;

}

/* The ClientListDTO class extends the CreateClientDTO class and adds the id, createdAt, and updatedAt
properties */
class ClientListDTO extends CreateClientDto {

    @IsOptional()
    id: string;

    @IsOptional()
    createdAt: string;

    @IsOptional()
    updatedAt: string;

}


export { CreateClientDto, ClientListDTO };
