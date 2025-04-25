const ExpandableText = ({ text, maxLength = 100 }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > maxLength;
  const displayText = expanded ? text : text.slice(0, maxLength);

  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "none" : 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {displayText}
        {isLong && !expanded && "..."}
      </Typography>
      {isLong && (
        <Button
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{ textTransform: "none", mt: 1, padding: 0 }}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      )}
    </>
  );
};

ExpandableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

ExpandableText.defaultProps = {
  maxLength: 100,
};
