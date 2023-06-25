import { config as env } from 'dotenv';

import { application } from './application';

async function bootstrap(): Promise<void> {
  env();

  const { PORT } = process.env;

  application.listen(PORT, function () {
    console.log(`Server running on port: ${PORT}`);
  });
}

bootstrap();
