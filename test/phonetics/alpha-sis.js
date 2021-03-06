/**
 * Talisman phonetics/alpha-sis tests
 * ===================================
 *
 */
import {assert} from 'chai';
import alphaSis from '../../src/phonetics/alpha-sis';

describe('alpha-sis', function() {

  it('should throw if the given word is not a string.', function() {
    assert.throws(function() {
      alphaSis([]);
    }, /string/);
  });

  it('should compute the Alpha SIS code correctly.', function() {
    const tests = [
      ['', ['00000000000000']],
      ['Christopher', ['06401840000000', '07040184000000', '04018400000000']],
      ['Niall', ['02500000000000']],
      ['Smith', ['03100000000000']],
      ['Schmidt', ['06310000000000']],
      ['Rodgers', ['04740000000000']],
      ['Rogers', ['04740000000000']],
      ['Kant', ['07210000000000', '06210000000000']],
      ['Knuth', ['02100000000000']],
      ['Harper', ['24940000000000']],
      ['Collier', ['07540000000000', '06540000000000']],
      ['Schultz', ['06500000000000', '06510000000000']],
      ['Livingston', ['05827012000000']],
      ['Nichols', ['02650000000000', '02705000000000', '02050000000000']],
      ['Chavez', ['06800000000000', '07080000000000', '08000000000000']],
      ['Ohrbock', ['14970000000000', '14960000000000']],
      ['Ohrbach', ['14960000000000', '14970000000000', '14900000000000']],
      ['Lyle', ['05500000000000']],
      ['Lisle', ['05050000000000']],
      ['Catz', ['07000000000000', '06000000000000', '07100000000000', '06100000000000']],
      ['Chritz', ['06400000000000', '07040000000000', '04000000000000', '06410000000000', '07041000000000', '04100000000000']],
      ['Chrichritz', ['06464000000000', '07046400000000', '04640000000000', '06470400000000', '07047040000000', '04704000000000', '06404000000000', '07040400000000', '04040000000000', '06464100000000', '07046410000000', '04641000000000', '06470410000000', '07047041000000', '04704100000000', '06404100000000', '07040410000000', '04041000000000']]
    ];

    tests.forEach(function([name, codes]) {
      assert.sameMembers(alphaSis(name), codes, name);
    });
  });
});
