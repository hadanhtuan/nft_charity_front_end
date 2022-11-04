import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
// import date
import MyDatePicker from "../DatePicker/DatePicker";
import FileBase from "react-file-base64";
import TuneIcon from "@mui/icons-material/Tune";
import uploadImg from "../../utils/UploadImgToCloud";
import * as api from "../../apis";
import { useSelector, useDispatch } from "react-redux";
import { CurrencyYuanOutlined } from "@mui/icons-material";
import { createCamp, editCamp } from "../../actions/campaign";
import { PICK_CAMP } from "../../constraint/actionTypes";
const defaultData = {
  title: "",
  desc: "",
  img1_url: "",
  img2_url: "",
  zone: "",
};

export default function Form() {
  const [formData, setFormData] = useState(defaultData);
  const currentId = useSelector((state) => state.campaign.currentId);
  const currentCamp = useSelector((state) =>
    currentId
      ? state.campaign.campaigns.find((camp) => camp.id == currentId)
      : null
  );

  const dispatch = useDispatch();
  const handlePost = async (e) => {
    e.preventDefault();
    formData.img1_url = await uploadImg(formData.img1_url);
    formData.img2_url = await uploadImg(formData.img2_url);

    if (currentCamp) {
      dispatch(editCamp(formData, currentId));
    } else {
      dispatch(createCamp(formData));
    }

    // const res = api.createCamp(formData);
    setFormData(defaultData);
  };

  useEffect(() => {
    if (currentCamp) {
      setFormData(currentCamp);
    }
  }, [currentId]);

  return (
    <Card sx={{ padding: `20px`, height: `100%` }}>
      <Box sx={{ display: `flex`, alignItems: `center` }}>
        <TuneIcon />
        <Typography variant="h6" sx={{ fontWeight: `700` }}>
          {currentCamp ? "Edit Campaign" : "New Campaign"}
        </Typography>
      </Box>
      <Divider />
      <form>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          value={formData.title}
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
        <TextField
          name="desc"
          variant="outlined"
          label="Description"
          value={formData.desc}
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, img1_url: base64 })
            }
          />
        </div>
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, img2_url: base64 })
            }
          />
        </div>
        <TextField
          name="zone"
          variant="outlined"
          label="Zone"
          value={formData.zone}
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          onClick={handlePost}
        >
          Submit
        </Button>
        {currentCamp && (
          <Button
            variant="outlined"
            size="large"
            type="submit"
            onClick={() => {
              dispatch({ type: PICK_CAMP, payload: "" });
              setFormData(defaultData)
            }}
          >
            Cancel
          </Button>
        )}
      </form>
    </Card>
  );
}
