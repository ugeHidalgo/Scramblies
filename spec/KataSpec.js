describe('Kata', function() {
  var t10,t11, t20,t21,message;

  beforeEach(function() {   
  });

  it('should be able to test', function() {
    expect(true).toBeTruthy();
  });

  it('should test codewars use cases', function() {
    t10 = performance.now();
    expect(scramble('rkqodlw','world')).toBeTruthy('world');
    expect(scramble('cedewaraaossoqqyt','codewars')).toBeTruthy('codewars');
    expect(scramble('katas','steak')).toBeFalsy('steak');
    expect(scramble('scriptjava','javascript')).toBeTruthy('javascript');
    expect(scramble('scriptingjava','javascript')).toBeTruthy('javascript');
    expect(scramble('scriptsjava','javascripts')).toBeTruthy('javascripts');
    expect(scramble('jscripts','javascript')).toBeFalsy('javascript');
    expect(scramble('aabbcamaomsccdd','commas')).toBeTruthy('commas');
    t11 = performance.now();
    message = 'First version = ' + (t11-t10) + ' milisecs'
    console.log (message);    
  });

  it('should test similar words in same order', function() {
    expect(scramble('world','world')).toBeTruthy('Similar words');
  });

  it('should test similar words in different order', function() {
    expect(scramble('world','rdwol')).toBeTruthy('Similar words in different order');
  });

  it('should test repeated letters with enough qty', function() {
    expect(scramble('aaaabcdefg','aaa')).toBeTruthy('aaaa in aaaabcdefg');
  });

  it('should test repeated letters with less qty', function() {
    expect(scramble('abcdefg','aa')).toBeFalsy('aa in abcdefg');
  });

  it('should test repeated letters with same qty', function() {
    expect(scramble('aaabbbcccddd','aaabbbccc')).toBeTruthy('aaabbbccc in aaabbbcccddd');
  });

  it('should test no ocurrences', function() {
    expect(scramble('abcdefg','hhhh')).toBeFalsy('hhhh in abcdefg');
  });
});