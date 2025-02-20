import React from "react";
import Timeline from "./EducationTimeLine";
import EducationInfo from "./EducationInfo";

export default function EducationPage() {
  return (
    <section className="education-container section-page">
      <EducationInfo />
      <Timeline />
    </section>
  );
}
