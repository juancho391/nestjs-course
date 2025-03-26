import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    @Inject('TASKS') private tasks: any,
    @Inject('PG') private clientPG: Client,
  ) {}
  getHello(): string {
    const dbName = this.configService.get<string>('DATABASE_NAME');
    console.log(this.tasks);
    return `Hello World! ${dbName}`;
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPG.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }

  createTask() {
    return new Promise((resolve, reject) => {
      this.clientPG.query(
        'INSERT INTO tasks (title) VALUES($1)',
        ['Aprender Nestjs'],
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        },
      );
    });
  }
}
