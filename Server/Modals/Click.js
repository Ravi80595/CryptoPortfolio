import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()

const clickSchema = mongoose.Schema(
    {
        count: {
            type: Number,
            required: true
          },
          ipAddress: {
            type: String,
            required: true
          },
          lastClickedAt: {
            type: Date
          }
    }
)

const Click = mongoose.model("Click",clickSchema)

export default Click;