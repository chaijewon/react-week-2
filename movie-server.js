// 라이브러리 설정
const express=require("express")
const request=require("request")
// express 서버 생성
const app=express();
// port 번호 => 0~65535  ==> 3355
const port=3355;

// 서버 가동
/*
   1)생성
   2)bind() ==> 개통 (번호 , 전화선)
                  => ip  , port
   3)listen()

   app.listen(port,()=>{

   })
   app.listen(port,function(){
   })

 */
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.listen(port,()=>{
    console.log("Server Start...","http://localhost:3355")
})
// /movie?no=1
app.get('/movie',(req,res)=>{
    var no=req.query.no;
    var site='';
    if(no==1)
        site="searchMainDailyBoxOffice.do";
    else if(no==2)
        site="searchMainRealTicket.do";
    else if(no==3)
        site="searchMainDailySeatTicket.do";
    else if(no==4)
        site="searchMainOnlineDailyBoxOffice.do";

    var url="http://www.kobis.or.kr/kobis/business/main/"+site;
    // 데이터 읽기
    request({url:url},function (err,request,json) {
        console.log(json);
        res.json(JSON.parse(json))
    })
})
// 몽고디비 연결 객체 생성
const Client=require("mongodb").MongoClient
// MongoClient mc=new MongoClient()
/*
     SELECT * FROM movie ==> find({})
     SELECT * FROM movie WHERE no=10  ==> find({no:10})
     SELECT * FROM movie WHERE title LIKE '%겨울%'  ==> find({title:{'$regex':".*겨울"}})

     INSERT INTO movie VALUES(1,'','') => insert({no:1,title:'',actor:''})
     UPADTE movie SET
     name='',actor=''     => update({'$set':{name:'',actor:''}})

     DELETE FROM movie WHERE no=1  => remove({no:1})
 */
// req => 사용자의 요청값을 받는다 => /news?no=1  ==> var no=req.query.no
// res => 요청결과에 대한 결과값 전송 ==> res.send():일반 문자열 전송 , res.json() : JSON으로 값 전송
app.get('/news',function (req,res) {
   // 몽고디비 연결
    // 주소 설정
    var url="mongodb://211.238.142.181:27017"
    // 연결
    Client.connect(url,(err,client)=>{
        // 데이터베이스 (mydb) => 테이블(news)
        var db=client.db("mydb")
        db.collection("news").find({}).toArray(function (err,docs) {
             console.log(docs)
            res.json(docs)
            client.close()
        })
    })
})
app.get('/news_pop',function (req,res) {
    // 몽고디비 연결
    // 주소 설정
    var url="mongodb://211.238.142.181:27017"
    // 연결
    Client.connect(url,(err,client)=>{
        // 데이터베이스 (mydb) => 테이블(news)
        var db=client.db("mydb")
        db.collection("news_pop").find({}).toArray(function (err,docs) {
            console.log(docs)
            res.json(docs)
            client.close()
        })
    })
})
//  /released?page=1&cate=1
/*
      상영 ==> 1
      개봉 ==> 2
      박스오피스 ==> 주간 : 3  월간 : 4 연간:5
 */
// 페이지별로 데이터 읽기
app.get('/released',function (req,res) {
    // page 받기
    //var cate=req.query.cate
    var page=req.query.page
    var rowSize=20
    var skip=(rowSize*page)-rowSize
    // Mongodb연결
    var url="mongodb://211.238.142.181:27017"
    Client.connect(url,(err,client)=>{
        // 데이터 베이스
        var db=client.db("mydb")
        // 데이터 연결
        db.collection("movie").find({cateno:1}).skip(skip).limit(rowSize)
            .toArray(function(err,docs){
                console.log(docs)
                res.json(docs)
                client.close()
            })
    })
})
// 총페이지
app.get("/total",(req,res)=>{
    var url="mongodb://211.238.142.181:27017"
    Client.connect(url,(err,client)=>{
        // 데이터 베이스
        var db=client.db("mydb")
        // 데이터 연결
        db.collection("movie").find({cateno:1}).count(function(err,count){
            res.json({total:Math.ceil(count/20.0)})
            client.close()
            return count
        })
    })
})




