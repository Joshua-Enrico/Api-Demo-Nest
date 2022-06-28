import { Body, Controller, Get, Param, Post, Render, Res } from '@nestjs/common';
import { ClientKpiDto, ClientResponseDto, CreateClientDto, errorResponseDto, listClientRDto } from '../dtos/client.dtos';
import { ClientService } from '../services/client.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class ClientController {

    constructor(

        private readonly clientService: ClientService

    ) { }


    /* A method that receives a new client and returns an object. */
    @Post('/creacliente')
    @ApiResponse({
        status: 201,
        description: 'The client has been successfully created',
        type: ClientResponseDto
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
        type: errorResponseDto
    })
    createClient(@Body() newClient: CreateClientDto): Promise<CreateClientDto> {

        return this.clientService.createClient(newClient);
    }


    /* A method that returns the KPI of the clients. */
    @Get('/kpideclientes')
    @ApiResponse({
        status: 201,
        description: 'The client has been successfully created',
        type: ClientKpiDto

    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
        type: errorResponseDto
    })
    getKpiClientes(): object {

        return this.clientService.getKpiClientes();

    }

    /* A method that returns the list of clients. */
    @Get('/listclientes')
    @ApiResponse({
        status: 201,
        description: 'The client has been successfully created',
        type: listClientRDto
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
        type: errorResponseDto
    })
    getListClientes(): object {

        return this.clientService.getListClientes();

    }


}
