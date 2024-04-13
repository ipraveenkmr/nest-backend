import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { LeadsModule } from './leads/leads.module';
import { ContactsModule } from './contacts/contacts.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountmastersModule } from './accountsmaster/accountsmaster.module';
import { ContactmastersModule } from './contactsmaster/contactsmaster.module';
import { LeadmastersModule } from './leadsmaster/leadsmaster.module';
import { NotemastersModule } from './notesmaster/notesmaster.module';
import { ProductmastersModule } from './productsmaster/productsmaster.module';
import { QuotemastersModule } from './quotesmaster/quotesmaster.module';
import { OpportunitymastersModule } from './opportunitymaster/opportunitymaster.module';
import { NotesModule } from './notes/notes.module';
import {AuthMiddleware} from './user/middlewares/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://devpraveenkr:G4zcwxTcz7Crno6J@cluster0.jyadqbv.mongodb.net/crm',
    ),
    UserModule,
    TasksModule,
    LeadsModule,
    ContactsModule,
    AccountsModule,
    AccountmastersModule,
    ContactmastersModule,
    LeadmastersModule,
    NotemastersModule,
    ProductmastersModule,
    QuotemastersModule,
    OpportunitymastersModule,
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  }
}
