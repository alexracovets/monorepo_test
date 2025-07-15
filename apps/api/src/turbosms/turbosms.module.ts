// turbosms.module.ts
import { Module } from '@nestjs/common';
import { TurbosmsService } from './turbosms.service';

@Module({
  providers: [TurbosmsService],
  exports: [TurbosmsService],
})
export class TurbosmsModule {}
