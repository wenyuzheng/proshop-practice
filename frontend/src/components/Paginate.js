import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ page, pages, keyword = "", isAdmin = false }) => {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          //   <LinkContainer
          //     key={x + 1}
          //     to={{ search: `keyword=${keyword}&page=${x + 1}` }}
          //   >
          //     <Pagination.Item active={page === x + 1}>{x + 1}</Pagination.Item>
          //   </LinkContainer>

          <li class="page-item" className={page === x + 1 ? "active" : ""}>
            <a
              class="page-link"
              href={
                !isAdmin
                  ? `/?keyword=${keyword}&page=${x + 1}`
                  : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
              }
            >
              {x + 1}
            </a>
          </li>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
