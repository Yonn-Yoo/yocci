export const numberException = ['e', 'E', '+', '-', '.'];

export const numberRegex = /^[0-9\b ]{0,20}$/;

export const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,16}$/;

export const emailRegex =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

export const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
