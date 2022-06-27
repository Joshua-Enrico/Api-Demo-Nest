import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateClientDto } from '../dtos/client.dtos';
const { v4 } = require('uuid');

const prisma = new PrismaClient();

@Injectable()
export class ClientService {

    /**
     * The function takes in a number, subtracts it from 79, adds the current year, and returns the result
     * @param {number} age - number - The age of the person
     * @returns the year that the user will die.
     */
    getAproxDeadYear(age: number): number {


        const currentYear = new Date().getFullYear();

        //The current life expectancy for U.S. in 2022 is 79.05 years, a 0.08% increase from 2021.
        const aproxDeadYear = (79 - (age) + currentYear)
        return aproxDeadYear;

    }

    /**
     * It creates a new client in the database using the Prisma Client
     * @param {CreateClientDto} client - CreateClientDto
     * @returns The new client that was created.
     */
    async createClient(client: CreateClientDto) {



        const newClient = await prisma.client.create({
            data: {
                id: v4(),
                ...client,
                aproxdead: this.getAproxDeadYear(client.age),
            },
        }).then((client) => {

            return client;

        }).catch((error) => {

            throw new InternalServerErrorException('We are sorry, but something went wrong, Try again later');

        })

        return newClient;


    }




    /**
     * It calculates the standard deviation of a list of numbers
     * @param {number} sum - The sum of all the ages in the list.
     * @param {number} count - number of elements in the array
     * @param {{ age: number }[]} AgesList - The list of ages that we want to calculate the standard
     * deviation for.
     * @returns The standard deviation of the list of ages.
     */
    getStandartDeviation(sum: number, count: number, AgesList: { age: number }[]): string {


        // calcular la media 
        const avg = sum / count;

        // elevar al cuadrado la distancia entre cada dato y la media
        let sumItems: number = 0;
        AgesList.map((client: any) => {
            sumItems += Math.pow(client.age - avg, 2);
        })

        // se divide entre el numero de datos y se saca la raiz cuadrada
        const stdDev = Math.sqrt(sumItems / count).toFixed(2);
        return stdDev;

    }


    /**
     * It returns the average age, the total number of clients and the standard deviation of the age of
     * all clients
     * @returns The average age of the clients, the total number of clients and the standard deviation
     * of the age of the clients.
     */
    async getKpiClientes() {

        return await prisma.$transaction([
            prisma.client.aggregate({
                _avg: {
                    age: true,
                },
                _count: true,
                _sum: {
                    age: true,
                }

            }),
            prisma.client.findMany({
                select: {
                    age: true
                }
            })
        ]).then((result) => {

            const tmp = result[0];
            const sum = tmp._sum.age;
            const count = tmp._count;

            const stdDev = this.getStandartDeviation(sum, count, result[1]);

            return {
                "averageAge": tmp._avg.age,
                "totalClients": count,
                "stdDev": stdDev,
            }

        }).catch((_error) => {

            throw new InternalServerErrorException('We are sorry, but something went wrong, Try again later');

        })

    }


    /**
     * It gets all the clients and then calculates the total number of clients.
     * @returns Clients - The list of clients.
     */
    async getListClientes() {


        // get clients and then calculate a posible deadyear of each client
        return await prisma.$transaction([
            prisma.client.findMany({}),
            prisma.client.aggregate({
                _count: true,
            })
        ]).then((result) => {

            return {
                "clients": result[0],
                "totalClients": result[1]._count,
            }

        }).catch((_error) => {
            throw new InternalServerErrorException('We are sorry, but something went wrong, Try again later');
        })

    }


}
