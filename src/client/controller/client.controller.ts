import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateClientDto } from '../dtos/client.dtos';
import { ClientService } from '../services/client.service';

@Controller()
export class ClientController {

    constructor(

        private readonly clientService: ClientService

    ) { }



/* A method that receives a new client and returns an object. */
    @Post('/creacliente')
    createClient(@Body() newClient: CreateClientDto): object {

        return this.clientService.createClient(newClient);
    }


/* A method that returns the KPI of the clients. */
    @Get('/kpideclientes')
    getKpiClientes(): object {

        return this.clientService.getKpiClientes();

    }

/* A method that returns the list of clients. */
    @Get('/listclientes')
    getListClientes(): object {

        return this.clientService.getListClientes();

    }


}
