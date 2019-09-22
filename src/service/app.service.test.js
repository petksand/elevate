import { AppService } from './app.service';

describe('service', () => {
    describe('app.service', () => {
        describe('#new', () => {
            it('constructs', () => {
                expect(() => new AppService()).not.toThrow();
            });
        });

        describe('#transactions', () => {
            it('gets them', async () => {
                const appService = new AppService();
                const transactions = await appService.transactions();
                expect(transactions).toBeDefined();
            })
        })
    });
});
