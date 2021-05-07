module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      email: String,
      country: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const UserData = mongoose.model("user_data", schema);
  return UserData;
};
