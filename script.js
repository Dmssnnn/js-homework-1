// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"

const getNum = (a) => {
    if(a < 0 ){
       return console.log("უარყოფითია")
    }else {
       return console.log("დადებითია")
    }
   }
   getNum(-21)
   
   
   // 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
   let sum = 0;
   const getSum = () => {
   
    for(let i = 0;  i <= 100; i++){
       sum += i;
    }
    return sum;
   }
   console.log(getSum())
   
   
   
   // 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
   // დააბრუნოს ეს ციფრი კენტია თუ ლუწი
   
   const getOddOrEven = (a) => {
       if(a % 2 === 0 ) {
           return console.log("even") 
       }else {
           return console.log("odd") 
       }
   }
   getOddOrEven(2)
   
   
   // 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
   // დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
   // და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი
   
   
   objectOfCar = {year:2018, model:"500"};
   const getAgeOfCar = (objectOfCar) => {
       return console.log(objectOfCar.year)
   }
   getAgeOfCar(objectOfCar)
   
   
   // 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
   // მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
   // მასივის უდიდესი ციფრი
   
   const numbers = [1,4,88,99, 123,9999] ;
   let highestNumber = 0;
   const  largestNumber = (value) => {
    for(let i = 0 ; i < value.length; i++){
        if(value[i] > highestNumber){
            highestNumber = value[i];
        }
    }
    return highestNumber;
   }
    console.log(largestNumber(numbers))


    // 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

//    let lowestNumber = 0 ;
//    const smallestNumber = (value) => {
//     for ( let i = 0 ; i < value.length ;i ++){
//         if(value[i] > lowestNumber) {
//             lowestNumber = value[i]
//         }
//     }
//     return lowestNumber;
//    }
//    console.log(smallestNumber(numbers))
   // 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
   // ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
   // მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"
   
   const getReverseWord = (word) => {
       return word.split('').reverse().join('')
   }
   console.log(getReverseWord("zd"))