import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

/* It's a class that contains the data that we want to send to the server when we create a new client */
class CreateClientDto {

    @IsNotEmpty()
    @ApiProperty({ description: 'The name of the client', example: 'John Doe', type: String })
    name: string;

    @IsNotEmpty()
    @ApiProperty({ description: 'Surname of the client is required', example: 'Doe', type: String })
    surname: string;

    @ApiProperty({ description: 'The age of the client', example: '30', type: Number })
    @IsNotEmpty()
    @IsInt()
    age: number;

    @ApiProperty({ description: 'The email of the client', example: '1996', type: String })
    @IsNotEmpty()
    birthdate: string;

}

/* The ClientListDTO class extends the CreateClientDTO class and adds the id, createdAt, and updatedAt
properties */
class ClientResponseDto extends CreateClientDto {

    @IsOptional()
    @ApiProperty({ description: 'Cliend ID', example: '1231-2131-23132-fsdfsdf', type: String })
    id: string;

    @IsOptional()
    @ApiProperty({ description: 'The date when the client was created', example: '2020-01-01', type: String })
    createdAt: string;

    @IsOptional()
    @ApiProperty({ description: 'The updatedAt of the client', example: '2020-01-01', type: String })
    updatedAt: string;

    @IsOptional()
    @ApiProperty({ description: 'The aprox year when the cliend could die', example: '2020', type: String })
    aproxdead: string

}




/* It's a DTO that contains the average age, total number of clients, and standard deviation of the
clients */
class ClientKpiDto {

    @ApiProperty({ description: 'The average age of the clients', example: '30', type: Number })
    @IsOptional()
    averageAge: number;

    @ApiProperty({description: 'Total number of Clients', example: '12', type: Number})
    @IsOptional()
    totalClients: number;

    @ApiProperty({ description: 'The standard deviation of the clients', example: '8.3', type: Number })
    @IsOptional()
    stdDev: number;
}

const example = {
    "clients": [
        {
            "id": "27a95ec9-dc3d-4b63-ad9c-47d7f75921de",
            "name": "Pedro1",
            "surname": "Perez",
            "age": 25,
            "birthdate": "01/01/1996",
            "aproxdead": 2076,
            "createdAt": "2022-06-27T20:01:31.008Z",
            "updatedAt": "2022-06-27T20:01:31.008Z"
        },
    ],
    "totalClients": 6
}

/* This class is used to return a list of clients and the total number of clients */
class listClientRDto {

    @ApiProperty({ description: 'List of All Clients', example: example.clients, type: [ClientResponseDto] })
    @IsOptional()
    clients: ClientResponseDto[];

    @ApiProperty({ description: 'Total number of Clients', example: example.totalClients, type: Number })
    @IsOptional()
    totalClients: number;

}

/* This class is used to return a response to the client when an error occurs */
class errorResponseDto {

    @ApiProperty({ description: 'Status Code', example: 500, type: Number })
    @IsOptional()
    statusCode: number;


    @ApiProperty({ description: 'Message', example: 'We are sorry, but something went wrong, Try again later', type: String })
    @IsOptional()
    message: string;


    @ApiProperty({ description: 'Type Error', example: 'Internal Server Error', type: String })
    @IsOptional()
    error: string;

}




export { CreateClientDto, ClientResponseDto, ClientKpiDto, listClientRDto, errorResponseDto };
