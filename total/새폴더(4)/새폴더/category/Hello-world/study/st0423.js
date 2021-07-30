fs.readFile(filename,[option],callback)    // 동기식 파일 읽기
fs.readFileSync(filename,[option])         // 비동기식 파일 일기
fs.writeFile(filename,[option],callback)   // 동기식 파일 쓰기 
fs.writeFileSync(filename,[option])        // 비동기식 파일 쓰기
fs.mkdir(path,[mode],callback)             // 동기식 폴더 생성
fs.mkdirSync(path,[mode])                  // 비동기식 폴더 생성
fs.rmdir(path,callback)                    //