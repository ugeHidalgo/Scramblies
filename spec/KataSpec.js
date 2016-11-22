describe('Kata', function() {
  var t10,t11, t20,t21,message;

  beforeEach(function() {   
  });

  it('should be able to test', function() {
    expect(true).toBeTruthy();
  });

  it('should test first version', function() {
    t10 = performance.now();
    expect(scramble1('rkqodlw','world')).toBeTruthy('world');
    expect(scramble1('cedewaraaossoqqyt','codewars')).toBeTruthy('codewars');
    expect(scramble1('katas','steak')).toBeFalsy('steak');
    expect(scramble1('scriptjava','javascript')).toBeTruthy('javascript');
    expect(scramble1('scriptingjava','javascript')).toBeTruthy('javascript');
    expect(scramble1('scriptsjava','javascripts')).toBeTruthy('javascripts');
    expect(scramble1('jscripts','javascript')).toBeFalsy('javascript');
    expect(scramble1('aabbcamaomsccdd','commas')).toBeTruthy('commas');
    t11 = performance.now();
    message = 'First version = ' + (t11-t10) + ' milisecs'
    console.log (message);    
  });

  it('should test second version', function() {
    t20 = performance.now();
    expect(scramble2('rkqodlw','world')).toBeTruthy('world');
    expect(scramble2('cedewaraaossoqqyt','codewars')).toBeTruthy('codewars');
    expect(scramble2('katas','steak')).toBeFalsy('steak');
    expect(scramble2('scriptjava','javascript')).toBeTruthy('javascript');
    expect(scramble2('scriptingjava','javascript')).toBeTruthy('javascript');
    expect(scramble2('scriptsjava','javascripts')).toBeTruthy('javascripts');
    expect(scramble2('jscripts','javascript')).toBeFalsy('javascript');
    expect(scramble2('aabbcamaomsccdd','commas')).toBeTruthy();
    t21 = performance.now();
    message = 'Second version = ' + (t21-t20) + ' milisecs'
    console.log (message);    
  });
});