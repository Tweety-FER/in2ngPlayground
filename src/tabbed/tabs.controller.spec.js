describe('tabs controller', function() {
  var tabsCtrl;
  
  beforeEach(module('in2.playground.tabbed'));
  
  beforeEach(inject(function(_$rootScope_, _$controller_) {
    tabsCtrl = _$controller_('in2TabsController', _$rootScope_.$new(), {});
  }));
  
  it('should be defined', function() {
    expect(tabsCtrl).toBeDefined();
  });
  
  it('should initially have some properties', function() {
    expect(tabsCtrl.tabs).toBeDefined();
    expect(tabsCtrl.tabs).toEqual({});
    expect(tabsCtrl.activate).toBeDefined();
    expect(tabsCtrl.registerTab).toBeDefined();
  });
  
  it('should be capable of registering unnamed tabs', function() {
    expect(tabsCtrl.tabs).toEqual({});
    
    //Perform registration with no name param
    var name = tabsCtrl.registerTab();
    
    expect(tabsCtrl.tabs).toEqual({'Tab0' : { active : true }});
    expect(name).toBe('Tab0');
  });
  
  it('should be capable of registering named tabs', function() {
    expect(tabsCtrl.tabs).toEqual({});
    
    //Perform registration with no name param
    var name = tabsCtrl.registerTab('Named');
    
    expect(tabsCtrl.tabs).toEqual({'Named' : { active : true }});
    expect(name).toBe('Named');
  });

  it('should ensure a the first tab is active by default', function() {
    tabsCtrl.registerTab();
    tabsCtrl.registerTab();
    tabsCtrl.registerTab();
    
    expect(tabsCtrl.tabs).toEqual({'Tab0' : { active : true }, 'Tab1' : { active : false }, 'Tab2' : { active : false }});
  });
  
  it('should be capable of activating a tab by name, disabling the others at the same time', function() {
    tabsCtrl.registerTab();
    tabsCtrl.registerTab();
    tabsCtrl.registerTab();
    
    expect(tabsCtrl.tabs).toEqual({'Tab0' : { active : true }, 'Tab1' : { active : false }, 'Tab2' : { active : false }});
    tabsCtrl.activate('Tab1');   
    expect(tabsCtrl.tabs).toEqual({'Tab0' : { active : false }, 'Tab1' : { active : true }, 'Tab2' : { active : false }});
    tabsCtrl.activate('Tab2');   
    expect(tabsCtrl.tabs).toEqual({'Tab0' : { active : false }, 'Tab1' : { active : false }, 'Tab2' : { active : true }});
    tabsCtrl.activate('Tab0');   
    expect(tabsCtrl.tabs).toEqual({'Tab0' : { active : true }, 'Tab1' : { active : false }, 'Tab2' : { active : false }});
  });
  
  it('should do nothing if we try to activate a tab that does not exist', function() {
    tabsCtrl.registerTab();
    tabsCtrl.activate('Tab1');
    expect(tabsCtrl.tabs).toEqual({'Tab0' : { active : true }});
  })
})