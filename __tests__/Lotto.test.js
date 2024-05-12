import Lotto from '../src/Domain/Lotto';

describe('Lotto 도메인 테스트', () => {
  it('로또에는 1부터 45까지의 번호 중 6개의 번호가 저장된다.', () => {
    // given
    const lotto = new Lotto([1, 2, 3, 43, 44, 45]);

    // when
    const { numbers } = lotto;

    // then
    expect(numbers).toHaveLength(6);
    numbers.forEach(number => {
      expect(number >= 1 && number <= 45).toBeTruthy();
    });
  });

  it('6개의 로또 번호는 오름차순으로 저장된다.', () => {
    // given
    const lotto = new Lotto([45, 1, 44, 2, 3, 43]);

    // when
    const { numbers } = lotto;

    // then
    expect(numbers).toEqual([1, 2, 3, 44, 45, 46]);
  });
});
