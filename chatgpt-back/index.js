const OpenAI=require("openai")
const  { Configuration, OpenAIApi }=OpenAI

const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())

const configuration = new Configuration({
    organization: "org-Xl8ueiw0QUn6esGG5elqMA3u",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


app.get("/",(req,res)=>{
    res.send("done")
})
app.post("/",async(req,res)=>{
    const {message}=req.body
    const response=await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 10,
        temperature: 0
    })
    console.log(response.data)
    if(response.data.choices[0].text){

        res.json({message:response.data.choices[0].text})
    }
})
app.listen(8000,async()=>{
  console.log("port running 8000")
try{
// await mongoose.connect("mongodb://127.0.0.1:27017/dummy")
console.log("cnnected to mongoDb")
}catch(e){
    console.log(e)
}
})