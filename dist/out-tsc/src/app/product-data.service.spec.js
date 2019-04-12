import { TestBed } from '@angular/core/testing';
import { ProductDataService } from './product-data.service';
describe('ProductDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProductDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=product-data.service.spec.js.map