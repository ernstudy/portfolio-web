import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Typography from "@mui/material/Typography";
import { Work, School } from "@mui/icons-material";
import { Box } from "@mui/material";

import timelineElements from "../../helper/education";

const Timeline = () => {
  return (
    <Box component="div" sx={{ width: "100%", padding: 0 }}>
      <VerticalTimeline className="top-line">
        {timelineElements.map((element, idx) => (
          <VerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            contentStyle={element.bgStyle}
            contentArrowStyle={element.arrowStyle}
            date={element.date}
            iconStyle={element.iconStyle}
            icon={<School />}
          >
            <Typography variant="h5" component="h3">
              {element.title}
            </Typography>
            <Typography variant="h6" component="h4">
              {element.subtitle}
            </Typography>
            <Typography variant="body1" component="p">
              {element.description}
            </Typography>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Timeline;
