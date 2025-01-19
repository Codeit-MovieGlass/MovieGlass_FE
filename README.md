# MovieGlass

## 💥 Command (yarn)

> **yarn classic(ver.1)** 을 사용하므로 **반드시 yarn을 이용해 명령어 실행**

### 개발 환경 실행

```shell
yarn dev
```

### Package / Library 설치

```shell
/* dependencies 설치 */
yarn add <package>

/* devDependecies 설치 */
yarn add -D <package>
```

---

## 📍 Git Commit Convention

## 1. Branch Naming Rule

**Branch 이름**은 **작업 목적과 연관된 이슈 번호를 포함하는 방식**

```php
<타입>/<이슈 번호>-<간단한 설명>

- feature/1234-add-user-login
- bugfix/5678-fix-login-error
- release/1.2.0
```

### Branch Type

- **feature/ - 새로운 기능 개발 시**
- **bugfix/ -** **버그 수정** 시
- **hotfix/ -** **긴급한 버그 수정** 시 (보통 프로덕션 환경에서 발생)
- **release/ -** **릴리즈 준비 시**
- **chore/ -** 빌드 및 기타 작업 자동화, 문서 작업 등 **코드와 관련 없는 작업**

---

## 2. Git Commit Message Rule

```php
<타입>(<모듈>): <변경 내용 요약> (#이슈 번호)

- feat(auth): add login functionality (#1234)
- fix(profile): correct user profile update error (#5678)
- docs: update README with new instructions (#91011)
```

### Commit Type

- **feat -** 새로운 기능 추가
- **fix -** 버그 수정
- **refactor -** **코드 리팩토링 (기능 변경 없이 구조 개선)**
- **style -** 코드 포맷팅, 세미콜론 누락 등 (비즈니스 로직에 영향이 없는 변경)
- **test -** 테스트 추가 또는 수정
- **docs -** 문서 추가 및 수정
- **chore -** 빌드 작업, 패키지 관리 등

---

## 🪄 Style Guide Usage

ThemeProvider의 prop으로 **theme** 객체 전달해 사용

```javascript
/* color 적용 예시 */
color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_1};

/* typography 적용 예시 */
${({ theme }) => theme.fontStyles.Body_1} // 별도의 프로퍼티 지정 없이 적용
```
