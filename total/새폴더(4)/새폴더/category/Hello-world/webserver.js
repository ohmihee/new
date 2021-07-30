//npm -> node package manager
//npm -> module의 설치 삭제 업그레이드 의존성 등을 관리
/* 오류 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\midas\AppData\Roaming\npm\uglifyjs.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오. 
위치 줄:1 문자:1
- 원인 : 권한이 제한되어있기 때문
- 해결 :  -> C:\ 위치에서 Set-ExecutionPolicy -Scope CurrentUser 라는 명령어 입력 
          -> ExecutionPolicy가 뜨면 RemoteSigned 명령어 입력
          -> 이후에 다시 설치하려는 모듈 다시 설치
*/
// module 실행하려면 설치한 모듈명 파일이름 ex)uglifyjs pretty.js
/* npm을 이용 방법
-> 가장 먼저 npm init
-> npm install moduelname --save  //save는프로젝트를 실행시 항상 사용 가능하다는 의미
-> 새로운 파일을 생성하고 repuire('modulename')
-> 변수에 할당 const underScore = require('underscore')
-> 이후에 사용시에는 underScore.하고 뒤에는 각 모듈 사용법에 따라 사용
-> 실행하려면 터미널에  node 파일명
*/
