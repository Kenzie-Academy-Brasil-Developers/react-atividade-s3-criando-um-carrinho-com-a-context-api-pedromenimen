
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/popover";
import { PopoverContainer } from "./style";

const PopoverContainerDiv = ({ content }) => {
  return (
      <PopoverContainer>
        <Popover closeOnBlur={false}>
          <PopoverTrigger>
          <i className="fas fa-shopping-cart"></i>
          </PopoverTrigger>
          <PopoverContent
          w="200px"
          m="15px"
          >{content}</PopoverContent>
        </Popover>
      </PopoverContainer>
  );
};

export default PopoverContainerDiv;
