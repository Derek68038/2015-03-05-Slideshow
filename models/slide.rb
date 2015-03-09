class Slide
  attr_reader :id
  attr_accessor :title, :text
  
  def initialize(options)
    @id = options["id"]
    @title = options["title"]
    @text = options["text"]
  end
  
  # Public: 
  # .find
  #
  # Returns: 
  # A single slide from the database.
  #
  # Parameters:
  # s_id - Integer
  #
  # State Changes:
  # Returns a Slide object.
  
  def self.find(s_id)
    result = DATABASE.execute("SELECT * FROM slides WHERE id = #{s_id}")[0]
    
    self.new(result)
  end
  
  # Public: 
  # #to_hash
  #
  # Returns:
  # The slide object as a Hash.
  #
  # Parameters:
  # None
  # 
  # State Changes:
  # None

  def to_hash
    {
      id: id,
      title: title,
      text: text,
    }
  end
  
end