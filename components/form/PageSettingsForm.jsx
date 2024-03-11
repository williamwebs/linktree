const PageSettingsForm = (page) => {
  return (
    <div>
      <form action="">
        <div className="bg-gray-300 h-32">
          <label>
            <input type="radio" name="bgType" value="color" />
            <span>Color</span>
          </label>
          <label>
            <input type="radio" name="bgType" value="image" />
            <span>Image</span>
          </label>
        </div>
        <div>avarter</div>
      </form>
    </div>
  );
};

export default PageSettingsForm;
