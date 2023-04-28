import * as React from "react"
import { Stack } from "react-bootstrap";

const MediaFilter = ({ image, alt, title, href }) => {
  return (
    <div className="card h-100" style={{maxWidth: "540px"}}>
      <a href={href} className="stretched-link"></a>
      <div className="row h-100 g-0">
        <div className="col-4">
          <Stack className="h-100 justify-content-center">
            <img src={image} className="img-fluid rounded-start p-2" alt={alt} />
          </Stack>
        </div>
        <div className="col-8">
          <div className="card-body h-100">
            <Stack className="h-100 justify-content-center">
              <h5 className="display-5">{title}</h5>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaFilter;
