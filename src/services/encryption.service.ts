// Copyright 2024 cbtpro
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionService {
  private readonly secretKey: string; // 替换为你的密钥

  constructor(private configService: ConfigService) {
    this.secretKey = this.configService.get<string>('SECRET_KEY');
    if (!this.secretKey) {
      console.warn('SECRET_KEY 未配置，加密功能将无法正常使用');
    }
  }
  encryptData(data: any): string {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      this.secretKey,
    ).toString();
  }

  decryptData(ciphertext: string): any {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
