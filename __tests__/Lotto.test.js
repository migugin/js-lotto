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
});
