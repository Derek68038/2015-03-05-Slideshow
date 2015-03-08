class Slide
  attr_reader :id
  attr_accessor :title, :text
  
  def initialize(options)
    @id = options["id"]
    @title = options["title"]
    @text = options["text"]
  end
  
  # Public: Get a single slide from the database.
  #
  # s_id - Integer
  #
  # Returns a Slide object.
  def self.find(s_id)
    result = DATABASE.execute("SELECT * FROM slides WHERE id = #{s_id}")[0]
    
    self.new(result)
  end
  
  # Returns the object as a Hash.
  def to_hash
    {
      id: id,
      title: title,
      text: text,
    }
  end
  
end