import { AppService } from '../app.service';

describe('service', () => {
    describe('app.service', () => {
        describe('#new', () => {
            it('constructs', () => {
                expect(() => new AppService()).not.toThrow();
            });
        });
    });
});
