let box = [1,2,3]
let units = [3,2,1]
let trucksize =3
function maximumunits()
{
    let shipping = 0
    for(let i=0;i<box.length;i++)
    {
        sum =0;
        for(let j=i+1;j<box.length;j++)
        {

            let sum = box[i]+box[j]
            if(sum <= trucksize)
            {
                shipping = Math.max(shipping,(units[i]*box[i])+(units[j]*box[j]))
            }
        }
    }
    console.log(shipping)
}
maximumunits()