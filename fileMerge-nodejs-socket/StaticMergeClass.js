var moment = require('moment');
const splitFile = require('split-file');
const fs = require('fs');
class StaticMergeClass{

    static MergeSplittedFiles(orignFile, arrFiles){

        // console.log(this.GetNow,'파일 합치기 시작');
        if(fs.existsSync(orignFile)) {
            fs.unlink(orignFile);
        }
        splitFile.mergeFiles(arrFiles,orignFile)
            .then(() => {
                console.log(orignFile + ' 파일 합치기까지 끝났다!');
                for(var i=0; i<arrFiles.length; i++){
                    fs.unlink(arrFiles[i]);
                }
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
        return true;
    }

    static GetNow(){
        var m = moment();
        var now = m.format('YYYY년MM월DD일 HH:mm:ss');
        return now;
    }
}

module.exports = StaticMergeClass;