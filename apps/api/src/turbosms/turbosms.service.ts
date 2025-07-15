import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { isDev } from 'src/utils/is-dev.util';

@Injectable()
export class TurbosmsService {
  private readonly logger = new Logger(TurbosmsService.name);
  private readonly apiUrl = 'https://api.turbosms.ua/message/send.json';
  private readonly token: string;
  private readonly sender: string;

  constructor(private config: ConfigService) {
    this.token = this.config.getOrThrow<string>('TURBOSMS_TOKEN');
    this.sender = this.config.getOrThrow<string>('TURBOSMS_SENDER');
  }

  async sendSms(rawTo: string, text: string): Promise<any> {
    if (isDev(this.config)) return;
    const to = rawTo.replace('+', '');
    try {
      const payload = {
        recipients: [to],
        sms: {
          sender: this.sender,
          text,
        },
      };

      const response = await axios.post(this.apiUrl, payload, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      });

      this.logger.log(`SMS sent to ${to}`);
      return response.data;
    } catch (error) {
      this.logger.error(`Failed to send SMS: ${error.message}`, error.stack);
      throw error;
    }
  }
}