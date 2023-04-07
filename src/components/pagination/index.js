import { Pagination, PaginationItem } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import './pagination.css';

const PaginationTable = ({ count, page, onChange }) => {
  return (
    <> 
        <Pagination
            count={count}
            page={page}
            onChange={onChange}
            size="small"
            renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackOutlinedIcon, next: ArrowForwardOutlinedIcon }}
                  {...item}
                />
            )}
        />
    </>
  );
}

export { PaginationTable };
