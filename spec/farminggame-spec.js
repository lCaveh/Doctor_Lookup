// import { Ranch } from './../src/farminggame.js';
//
// describe('Ranch', function() {
//   let ranch;
//
//   beforeEach(() => {
//     ranch= new Ranch();
//     jasmine.clock().install();
//   });
//
//   afterEach(() => {
//     jasmine.clock().uninstall();
//   });
//
//   it('should test if plant function works', function() {
//     ranch.growCorn = ranch.plant();
//     ranch.growCorn();
//     expect(ranch.farm["timeToGrow"]).toEqual(60);
//   })
//
//   it('should test if the crop dies after 30 seconds of not watering', function() {
//     ranch.growCorn = ranch.plant("corn", 60, 1000);
//     ranch.growCorn();
//     ranch.setLife();
//     jasmine.clock().tick(30001);
//     expect(ranch.farm["harvestProduction"]).toEqual(0);
//   })
//
//   it('should test if the crop does not dies after 30 seconds if it was watered', function() {
//     ranch.growCorn = ranch.plant("corn", 60, 1000);
//     ranch.growCorn();
//     ranch.setLife();
//     jasmine.clock().tick(10001);
//     ranch.watering();
//     jasmine.clock().tick(2000);
//
//     expect(ranch.farm["harvestProduction"]).toEqual(1000);
//   })
//
//   it('should test if the crop is ready to harvest ', function() {
//     ranch.growCorn = ranch.plant("corn", 60, 1000);
//     ranch.growCorn();
//     ranch.growing();
//     jasmine.clock().tick(60001);
//     expect(ranch.farm["harvestProduction"]).toEqual(1000);
//   })
// })
