// 제네릭을 사용하기 전 인터페이스 타입 정의
// *제네릭 적용

interface DropdownItem<T> {
  value: T,
  selected: boolean
}

// interface Email {
//   value: string,
//   selected: boolean
// }

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number,
//   selected: boolean
// }

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// ===========================================

function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

// NOTE: 넘버 드롭 다운 아이템 추가
numberOfProducts.forEach(product => {
  const item = createDropdownItem(product)
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
})